import { memo } from 'react';
import { MainLayoutProps } from "./MainLayout.types";
import classes from "./MainLayout.module.scss";
import cx from "classnames";
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const FContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: "flex"
}));

const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, sidebar } = props;

  return (
    <FContainer className={cx(classes.layout, className)} >
      <div className={classes.layout__sidebar}>{sidebar}</div>
      <div className={classes.layout__content}>{content}</div>
    </FContainer>
  );
});

export default MainLayout;
