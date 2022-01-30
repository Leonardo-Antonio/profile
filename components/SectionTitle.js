import styles from "../styles/SectionTitle.module.css";

export const SectionTitle = ({ title }) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <h1 className="font-bold text-3xl flex-nowrap pr-11">{title}</h1>
        <div className="w-1/2 z-10 bg-black h-1 rounded-full"></div>
      </div>
    </div>
  );
};
