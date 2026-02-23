export default function Favorites({ favorites, setInputText, toggleFavorite, cap }) {
  if (!favorites || favorites.length === 0) return null

  return (
    <section className='favorites'>
      <h2>Favorites</h2>
      {favorites.map(fav =>
        <div key={fav.id}>
          <p>{cap(fav.name)}</p>
          <img src={fav.sprite} onClick={(() => setInputText(fav.name))}></img>
          <button onClick={() =>
            toggleFavorite({
              id: fav.id,
              name: fav.name,
              sprite: fav.sprite
            })
          }>Click to Remove Favorite</button>
        </div>
      )}
    </section>
  )
}