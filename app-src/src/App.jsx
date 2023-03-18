import './App.css'

function App() {
const sites = [
    {
      title: 'Aðgengi',
      url:'https://odinndagur.github.io/adgengi'
    },
    {
      title: 'R6014',
      url: 'https://odinndagur.github.io/r6014'
    },
    {
      title: 'Táknmál',
      url: 'https://taknmal.github.io'
    }
  ]
  return (
    <div className="App">
      <h1>ÓDB</h1>
      <ul>
        {sites.map(site => {
          return <li><a href="{site.url}">{site.title}</a></li>
        })}
      </ul>
    </div>
  )
}

export default App
