export default function Favorites({ favorites, setInputText }) {
  return (
    <section className='favorites'>
      <h2>Favorites</h2>
      {favorites.map(fav =>
        <div key={fav.id} onClick={(() => setInputText(fav.name))}>
          <p>{fav.name}
          </p>
          <img src={fav.sprite}></img>
        </div>
      )}
    </section>
  )
}