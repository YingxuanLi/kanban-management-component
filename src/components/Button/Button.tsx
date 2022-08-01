
interface ButtonProps {
  /**Primary, secondary or destructive */
  variant: "primary" | "secondary" | "destructive";
  label: String;
  onClick?: () => void;
}
export const Button = (props: ButtonProps) => {
  const { variant, label } = props;
  console.log("TYPE ", variant);
  let buttonColor =
    variant === "primary"
      ? "bg-main-purple"
      : variant === "secondary"
      ? "bg-btn-secondary"
      : "bg-red";
    let hover = ""

  console.log(buttonColor);
  let styledClassName = `${buttonColor} rounded-lg p-2 ${hover} w-btn h-lg text-white font-bold`;
  let button = (
    <button
      className={styledClassName}
      onClick={() => {
        console.log(label);
      }}
    >
      {label}
    </button>
  );
  return button;
};
