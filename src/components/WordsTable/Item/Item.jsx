import useToggle from "../../../hooks/useToggle";
import { Button } from "../../Button/Button";
import { ActionButton } from "../../Modal/ActionButton";
export const Item = ({ en, ua, category, progress, _id, isIrregular }) => {
  const { toggle, isOpen } = useToggle();
  return (
    <>
      <tr>
        <td className="p-[22px] border border-[#DBDBDB] border-l-0 ">{en}</td>
        <td className="p-[22px] border border-[#DBDBDB]">{ua}</td>
        <td className="p-[22px] border border-[#DBDBDB]">{category}</td>
        <td className="p-[22px] border border-[#DBDBDB]">{progress}</td>
        <td className="p-[22px] border border-[#DBDBDB] border-r-0">
          <Button onClick={toggle} text="..." svg="hidden" />
        </td>
      </tr>
      {isOpen && (
        <ActionButton
          id={_id}
          en={en}
          ua={ua}
          isIrregular={isIrregular}
          category={category}
        />
      )}
    </>
  );
};
