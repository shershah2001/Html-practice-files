const makeRequest = async () => {
    const valOfName = document.querySelector("#name").value;
    const valOfJob = document.querySelector("#job").value;
    const errorPara = document.querySelector("#errorPara");
    try {
        const myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: valOfName, job: valOfJob })
        }
        const response = await fetch('https://reqres.in/api/users', myInit)
        if (!response.ok) {
            throw new Error(`HTTP Error! status ${response.status}`)
        }
        console.log(response)
        const data = await response.json();
        if (!data) {
            throw new Error(`No result in the response`)
        }
        console.log(data)
        return data;

    } catch (error) {
        errorPara.innerHTML = error;
        return []
    }
}
const submitHandler = (event) => {
    const valOfName = document.querySelector("#name");
    const valOfJob = document.querySelector("#job");
    event.preventDefault();
    makeRequest().then((res) => console.log(res)).catch((err) => console.log(err))
    valOfName.value = " ";
    valOfJob.value = " ";
}