fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.body.style.backgroundImage =`url(${data.urls.full})`
    document.querySelector('#img-author').textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM1MDQwNTg&ixlib=rb-4.0.3&q=80)`
    document.querySelector('#img-author').textContent = `By: Andrew Ridley`
  })

  fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
      if(!res.ok) {
        throw Error('Something went wrong.')
      }
      return res.json()
    })
    .then(data => {
      document.querySelector('#crypto').innerHTML = `
      <div class="crypto-top">
      <img src=${data.image.small}>
      <h3>${data.name}</h3>
      </div>
      <div class="crypto-bottom">
      <p>Current: $${data.market_data.current_price.usd}</p>
      <p>High: $${data.market_data.high_24h.usd}</p>
      <p>Low: $${data.market_data.low_24h.usd}</p>
      </div>
      `
     
    })
    .catch(err => console.log(err))