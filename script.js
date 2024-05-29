const inputs = document.getElementsByTagName("input");
const fName = inputs[0];
const lName = inputs[1];
const submitBtn = inputs[2];

submitBtn.addEventListener("click", getFormvalue);
function getFormvalue(e) {
    //Write your code here

    e.preventDefault();
    const firstName = fName.value;
    const lastName = lName.value;
    alert(`${firstName} ${lastName}`);
}