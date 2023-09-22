document.addEventListener('DOMContentLoaded', function () {
  let discord = document.getElementById('discord-link')
  let mail = document.getElementById('mail-link')

  discord.addEventListener('click', function (event) {
    event.preventDefault()
    let copytext = 'alex_mclovin'
    var tempInput = document.createElement('input')
    tempInput.style.position = 'absolute'
    tempInput.style.left = '-1000px'
    tempInput.value = copytext
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    discord.classList.remove('fab')
    discord.classList.remove('fa-discord')
    discord.classList.add('fa-solid')
    discord.classList.add('fa-check')
    setTimeout(() => {
      discord.classList.remove('fa-solid')
      discord.classList.remove('fa-check')
      discord.classList.add('fab')
      discord.classList.add('fa-discord')
    }, 2000)
  })
  mail.addEventListener('click', function (event) {
    event.preventDefault()
    let copytext = 'jrmlelantus@gmail.com'
    var tempInput = document.createElement('input')
    tempInput.style.position = 'absolute'
    tempInput.style.left = '-1000px'
    tempInput.value = copytext
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    mail.classList.remove('fa-envelope')
    mail.classList.add('fa-solid')
    mail.classList.add('fa-check')
    setTimeout(() => {
      mail.classList.remove('fa-check')
      mail.classList.add('fa-envelope')
    }, 2000)
  })
})
