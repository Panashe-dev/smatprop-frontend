import React, { Fragment, useState } from "react";
import { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import { styled } from "@mui/material/styles";
import { SvgIconProps } from "@mui/material/SvgIcon";
import TreeView from "@mui/lab/TreeView";
import "rodal/lib/rodal.css";
import Rodal from "rodal";

import TreeItem from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoIcon from "@mui/icons-material/Info";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListIcon from "@mui/icons-material/List";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

export default function AnimatedTreeView() {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <TreeView
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem
          nodeId="1"
          onClick={show}
          labelText="USSD"
          labelIcon={SmartphoneIcon}
        />
        <StyledTreeItem
          nodeId="2"
          labelText="Chat Boot"
          labelIcon={SmartphoneIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />

        <StyledTreeItem nodeId="3" labelText="Other" labelIcon={SmartphoneIcon}>
          <StyledTreeItem
            nodeId="4"
            labelText="Existing Member"
            labelIcon={SmartphoneIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
          <StyledTreeItem
            nodeId="5"
            labelText="New Member"
            labelIcon={SmartphoneIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
        </StyledTreeItem>
      </TreeView>

      <div>
        <Rodal visible={visible} onClose={hide} animation="Zoom" height={200}>
          <div className="arrow-ribbone-right bg-primary"></div>

          <hr />

          <Row className="mb-4">
            <Col md={8}>
              <Form.Control type="text" placeholder="Enter Member Number" />
            </Col>
            <Col md={4}>
              <Form.Control type="text" placeholder="Enter Sufix" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button type="submit" className="btn login100-form-btn btn-info">
                Procced
              </Button>
            </Col>
          </Row>
        </Rodal>
      </div>
    </Fragment>
  );
}
