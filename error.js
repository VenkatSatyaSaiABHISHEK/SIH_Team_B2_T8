
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmation = document.getElementById('confirmation');
    const successMessage = document.getElementById('successMessage');
    const confirmDoctor = document.getElementById('confirmDoctor');
    const confirmDate = document.getElementById('confirmDate');
    const confirmTime = document.getElementById('confirmTime');
    const submitBooking = document.getElementById('submitBooking');

    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedDoctor = doctorSelect.value;
        const selectedDate = dateInput.value;
        const selectedTime = timeSlot.value;

        confirmDoctor.textContent = selectedDoctor;
        confirmDate.textContent = selectedDate;
        confirmTime.textContent = selectedTime;
        confirmation.classList.remove('hidden');
        appointmentForm.classList.add('hidden');
    });

    submitBooking.addEventListener('click', function () {
        confirmation.classList.add('hidden');
        successMessage.classList.remove('hidden');
    });
});