// export default function MoneyCard(props) {
//   console.log("props:", props.data);
//   console.log("props:", props.title);
export default function MoneyCard({ title, moneyProps, dynamicClass, }) {
  //   console.log("title:", title);
  //   console.log("data:", data);
  return (
    <div
      className={`card col-md-3 gt-5 text-center justify-content-center ${dynamicClass}`}
      style={{ height: "200px" }}
    >
      <h3>{title}</h3>
      <h1>{moneyProps}</h1>
    </div>
  );
}
