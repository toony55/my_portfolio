function calculateAge(birthday) {
    const currentDate = new Date();
    const birthDate = new Date(birthday);

    if (isNaN(birthDate)) {
        console.error('Invalid birthday format. Please use YYYY-MM-DD.');
        return 'Invalid date';
    }

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    return age;
}

// Replace with the actual birthday in the format 'YYYY-MM-DD'
const birthday = '2001-12-15';
// console.log(birthday);

const age = calculateAge(birthday);
// console.log(age);
// Display the age in the span element
document.getElementById('age').innerText = age;