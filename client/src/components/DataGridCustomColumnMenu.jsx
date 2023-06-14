import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuColumnsItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} />
      <GridColumnMenuColumnsItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
