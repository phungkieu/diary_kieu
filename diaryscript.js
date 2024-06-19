document.getElementById('injury').addEventListener('change', function() {
    const injuryDetail = document.getElementById('injuryDetail');
    if (this.value === 'yes') {
        injuryDetail.style.display = 'block';
        injuryDetail.setAttribute('required', 'required');
    } else {
        injuryDetail.style.display = 'none';
        injuryDetail.removeAttribute('required');
    }
});

document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log(formObject);
    alert('운동 기록이 저장되었습니다!');
    this.reset();
    document.getElementById('injuryDetail').style.display = 'none';
});
