

window.addEventListener('load', async () => {
    loadScrolling()

    // Fetch site config
    let rawData = await fetch("/config.json")
    let config = await rawData.json()

    // Load signup links
    document.querySelectorAll('.signup').forEach(item => {
        item.href = config['signupLink']
    })

    // Gather targets
    const dayTarget = document.getElementById("days");
    const hourTarget = document.getElementById("hours");
    const minuteTarget = document.getElementById("minutes");
    const secondTarget = document.getElementById("seconds");
    const qnaTarget = document.querySelector('#qna-grid');
    const countdown = document.querySelector('#countdown');
    const tillMsg = document.querySelector('#until-msg');
    const times = config['times']
    let targetTime = times['start']

    // Fill in FAQ
    for (const [question, answer] of Object.entries(config['faq'])) {
        qnaTarget.innerHTML += generateQnA(question, answer)
    }

    // Start countdown
    let x = setInterval(() => {
        
        // Calculate distance between target time
        distance = calculateTimeDifference(targetTime)

        // Update timer if time thresholds are met
        if (distance < 0) {   
            if (calculateTimeDifference(times['end']) < 0) { // After the end
                clearInterval(x);
                countdown.innerHTML = `
                    <h3>DataHacks 2025 has concluded!</h3>
                    <button onclick="location.href='https://www.ds3ucsd.com/'">Join us next year and check out DS3!</button><br>
                `;
                countdown.style.display = 'block';
                countdown.style.textAlign = 'center';
            } else { // Between start and end
                targetTime = times['end']
                countdown.insertAdjacentHTML('beforebegin', "<h3>DataHacks 2025 has begun!</h3>")
                tillMsg.innerHTML = 'till DataHacks ends!'
                distance = calculateTimeDifference(targetTime)
            }
        }
        
        // Calculate times
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        days = String(days).padStart(2, '0')
        hours = String(hours).padStart(2, '0')
        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')
        dayTarget.innerHTML = days;
        hourTarget.innerHTML = hours;
        minuteTarget.innerHTML = minutes;
        secondTarget.innerHTML = seconds;



    }, 1000)

})

function calculateTimeDifference(targetTime) {
    let now = new Date().getTime();
    let targetDate = new Date(targetTime)
    return targetDate - now;
}

function loadScrolling() {
    // Nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top for logo
    document.querySelector('a[href="/"]').addEventListener('click', function(e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function generateQnA(question, answer) {
    return `
    <div class="qna">
        <span>Q: ${question}</span>
        <p>A: ${answer}</p>
    </div>
    `
}
