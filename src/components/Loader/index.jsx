import styles from "./Loader.module.scss"

export default function Loader() {
  return (
   <>
     <div className="w-full h-[100vh] flex items-center justify-center">
      <svg id={styles.icon} viewBox="25 25 50 50" className=" stroke-cor-roxoClaroNetshoes">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
   </>
  );
}
