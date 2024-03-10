import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableTitles}>
        <tr className={css.tableRow}>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(item => {
          return (
            <tr className={css.tableRow} key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.tableDescrType}>{type}</td>
      <td className={css.tableDescr}>{amount}</td>
      <td className={css.tableDescr}>{currency}</td>
    </>
  );
};

export default TransactionHistory;