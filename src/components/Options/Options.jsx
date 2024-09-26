import css from "./Options.module.css";

export default function Options({ onLeaveFeedback, totalFeedback }) {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onLeaveFeedback("reset")} className={css.reset}>
          Reset
        </button>
      )}
    </div>
  );
}
