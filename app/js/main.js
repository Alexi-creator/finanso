"use strict"

document.addEventListener('DOMContentLoaded', function() {   
  
  
  // заполняем рейтинги цветными линиями в зависимости от рейтинга, например от ответа с сервера (Скорость работы, Качество обслуживания, ...)
  
  document.querySelectorAll('.value-set__rate').forEach((item) => value(item))

  function value(elem) {
    const rate = elem.innerHTML
    const width = rate * 100 / 5
    let color
    if (width < 60) {
      color = '#E3405E'
    }
    if (width >= 60 && width < 80) {
      color = '#FABD48'
    }
    if (width > 80) {
      color = '#10B97B'
    }
    const parent = elem.closest('.value-set__value-wrap')
    const value = parent.querySelector('.value-set__value-current')
    value.style.width = `${width}%` 
    value.style.backgroundColor = `${color}` 
  }

})






