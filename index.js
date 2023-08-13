let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeBtnOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeBtnTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeBtnThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestBtnOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestBtnTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestBtnThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// let resetBtnEl = document.getElementById("reset-btn")

function resetBtn() {
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
    guestScore = 0
    homeScore = 0
}