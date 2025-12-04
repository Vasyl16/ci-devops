function Greeting({ name }) {
  if (!name || name.trim() === '') {
    return <p className="greeting">Hello, Guest!</p>
  }

  return <p className="greeting">Hello, {name}!</p>
}

export default Greeting

