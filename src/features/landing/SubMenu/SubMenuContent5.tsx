import { siteConfig } from "@/features/configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuGrid } from "./SabMenuGrid";

function SubMenuContent5() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "5";

  const items = siteConfig.mainNav[parseInt(subMenuIndex) - 1];

  if (value === subMenuIndex) {
    return (
      <>
        <SubMenuGrid item1={items} id={subMenuIndex} />
      </>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent5 };
