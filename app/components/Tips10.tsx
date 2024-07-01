import Button from "./Button";
import ColorThemeSelector from "./ColorThemeSelector";

// https://zenn.dev/yoshinoki/articles/next-tailwind-darkmode
const Tips10 = () => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="bg-white dark:bg-slate-800">
        <p className="text-slate-900 dark:text-white">テキスト</p>
      </div>
      <ColorThemeSelector />
    </div>
  );
};

export default Tips10;
