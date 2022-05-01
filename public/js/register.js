const signupFormHandler = async (event) => {
  event.preventDefault()

  const name = document.querySelector("[name='name-signup']").value.trim()
  const employee_id = document.querySelector("[name='id-signup']").value.trim()
  const manager = document.querySelector("[name='manager-signup']").value.trim()
  const department = document
    .querySelector("[name='department-signup']")
    .value.trim()
  const email = document.querySelector("[name='email-signup']").value.trim()
  const password = document
    .querySelector("[name='password-signup']")
    .value.trim()

  if (name && employee_id && manager && department && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        employee_id,
        manager,
        department,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
      document.location.replace("/account")
    } else {
      alert(response.statusText)
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler)
