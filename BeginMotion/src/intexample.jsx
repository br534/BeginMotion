{/* Display Splits if intervals are recorded */}
{list && list.length > 0 ? (
    <>
      <h3>Intervals</h3>
      <ul>
        {list.map((interval, index) => (
          <li key={index}>Interval {index + 1}: {formatTime(interval)}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>No intervals recorded...</p>
  )}
