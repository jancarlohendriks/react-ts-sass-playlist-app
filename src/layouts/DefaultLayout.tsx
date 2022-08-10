import styles from "./DefaultLayout.module.scss";

interface Props {
  title?: string;
  preTitle?: string;
  children?: React.ReactNode;
}

export const DefaultLayout = ({ title, preTitle, children }: Props) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        {preTitle && <span className={styles.preTitle}>{preTitle}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        <hr />
      </header>
      <main>{children}</main>
    </div>
  );
};
