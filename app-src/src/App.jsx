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
      <header>
        <h1>ÓDB</h1>
      </header>
      <main>
        {sites.map(site => {
           return <div key={site.url} className="card"><a href={site.url}>{site.title}</a></div>
        })}
      </main>  
    </div>
  )
}

export default App
