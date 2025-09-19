import Icon from 'styles/custom/Icon';
import type { MenuItem } from 'contexts/menu/useMenuContextState';

type MenuItemEntryProps = MenuItem & {
  resetMenu: () => void;
};

const MenuItemEntry = ({
  action,
  icon,
  label,
  primary,
  resetMenu,
  separator
}: MenuItemEntryProps): React.JSX.Element => (
  <li>
    {separator ? (
      <hr />
    ) : (
      <figure
        onClick={() => {
          action?.();
          resetMenu();
        }}
      >
        {icon && <Icon src={icon} alt={label} $imgSize={16} />}
        <figcaption className={primary ? 'primary' : ''}>{label}</figcaption>
      </figure>
    )}
  </li>
);

export default MenuItemEntry;
