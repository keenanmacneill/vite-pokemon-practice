export default function Favorites({ favorites, setQuery, toggleFavorite, cap }) {
  if (!favorites || favorites.length === 0) return null

  return (
    <div id='favorites'>
      <h2 id='favorite-title'>Favorites</h2>
      <div id='favorite-pokemon'>
        {favorites.map(fav =>
          <div key={fav.id}>
            <img src={fav.sprite} onClick={() => setQuery(fav.name)}></img>
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
    </div>
  )
}