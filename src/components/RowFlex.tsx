import styles from "./RowFlex.module.scss";

interface Props {
  children?: React.ReactNode;
}

export const RowFlex = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>;
};
