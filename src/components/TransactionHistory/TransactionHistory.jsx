import css from "./TransactionHistory.module.css"; // Додайте цей імпорт

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <body>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}
                </td>
          </tr>
        ))}
      </body>
    </table>
  );
};

export default TransactionHistory;