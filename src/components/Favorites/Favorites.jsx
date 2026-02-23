export default function Favorites({ favorites, setInputText, toggleFavorite, cap }) {
  if (!favorites || favorites.length === 0) return null

  return (
    <div className='favorites'>
      <h2>Favorites</h2>
      {favorites.sort().map(fav =>
        <div key={fav.id}>
          <img src={fav.sprite} onClick={(() => setInputText(fav.name))}></img>
          <p>{cap(fav.name)}</p>
          <button onClick={() =>
            toggleFavorite({
              id: fav.id,
              name: fav.name,
              sprite: fav.sprite
            })
          }>Click to Remove Favorite</button>
        </div>
      )}
    </div>
  )
}