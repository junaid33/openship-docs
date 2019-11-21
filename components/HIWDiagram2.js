import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { ArcherContainer, ArcherElement } from "react-archer";
import DiagramNode from "./DiagramNode2";
import Logo from "./Logo";
import Sogo from "./shopifyLogo";

const DSbranch = {
  backgroundColor: "#48BB78",
  border: "1px solid #48BB78",
  borderRadius: ".25rem",
  boxShadow: "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px",
  boxSizing: "border-box",
  color: "#fff",
  display: "inline-block",
  fontSize: ".775rem",
  fontWeight: "600",
  letterSpacing: ".025em",
  lineHeight: "1.5",
  margin: ".5rem 0 .5rem 0",
  overflow: "visible",
  padding: ".425rem 1.05rem",
  position: "relative",
  textAlign: "center",
  textTransform: "uppercase",
  transitionDelay: "0s",
  transitionDuration: ".15s",
  transitionProperty: "all",
  transitionTimingFunction: "ease",
  userSelect: "none",
  verticalAlign: "middle",
  willChange: "transform"
};

const FSbranch = {
  backgroundColor: "#3182CE",
  border: "1px solid #3182CE",
  borderRadius: ".25rem",
  boxShadow: "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px",
  boxSizing: "border-box",
  color: "#fff",
  display: "inline-block",
  fontSize: ".775rem",
  fontWeight: "600",
  letterSpacing: ".025em",
  lineHeight: "1.5",
  margin: ".5rem .5rem .5rem 0",
  overflow: "visible",
  padding: ".425rem 1.05rem",
  position: "relative",
  textAlign: "center",
  textTransform: "uppercase",
  transitionDelay: "0s",
  transitionDuration: ".15s",
  transitionProperty: "all",
  transitionTimingFunction: "ease",
  userSelect: "none",
  verticalAlign: "middle",
  willChange: "transform"
};

const HIWDiagram = () => (
  <Box background="black">
    <ArcherContainer strokeColor="white" strokeWidth={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom="100px"
      >
        <ArcherElement
          id="root"
          relations={[
            {
              targetId: "element2",
              targetAnchor: "top",
              sourceAnchor: "bottom",
              label: (
                <Heading
                  size={100}
                  fontWeight={600}
                  fontSize="14px"
                  color="#E4E7EB"
                  background="#1A202C"
                  paddingY="3px"
                >
                  Orders
                </Heading>
              )
            }
          ]}
        >
          <Box
            width={180}
            {...{
              backgroundColor: "#fff",
              border: "1px solid #fff",
              borderRadius: ".25rem",
              boxShadow:
                "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px",
              boxSizing: "border-box",
              color: "#fff",
              display: "inline-block",
              fontSize: ".875rem",
              fontWeight: "600",
              letterSpacing: ".025em",
              lineHeight: "1.5",
              overflow: "visible",
              paddingX: ".8rem",
              paddingY: ".5rem",
              position: "relative",
              textAlign: "center",
              textTransform: "uppercase",
              transitionDelay: "0s",
              transitionDuration: ".15s",
              transitionProperty: "all",
              transitionTimingFunction: "ease",
              userSelect: "none",
              verticalAlign: "middle",
              willChange: "transform"
            }}
          >
            <Sogo />
          </Box>
        </ArcherElement>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom="70px"
      >
        <ArcherElement
          id="element2"
          relations={[
            {
              targetId: "element3",
              targetAnchor: "right",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element4",
              targetAnchor: "right",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element5",
              targetAnchor: "right",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element6",
              targetAnchor: "right",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element7",
              targetAnchor: "left",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element8",
              targetAnchor: "left",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element9",
              targetAnchor: "left",
              sourceAnchor: "bottom"
            },
            {
              targetId: "element10",
              targetAnchor: "left",
              sourceAnchor: "bottom"
            }
          ]}
        >
          <Box
            width={220}
            {...{
              backgroundColor: "#172b4d",
              border: "1px solid #172b4d",
              borderRadius: ".25rem",
              boxShadow:
                "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px",
              boxSizing: "border-box",
              color: "#fff",
              display: "inline-block",
              fontSize: ".875rem",
              fontWeight: "600",
              letterSpacing: ".025em",
              lineHeight: "1.5",
              overflow: "visible",
              paddingX: ".8rem",
              paddingY: ".5rem",
              position: "relative",
              textAlign: "center",
              textTransform: "uppercase",
              transitionDelay: "0s",
              transitionDuration: ".15s",
              transitionProperty: "all",
              transitionTimingFunction: "ease",
              userSelect: "none",
              verticalAlign: "middle",
              willChange: "transform"
            }}
          >
            <Logo />
          </Box>
        </ArcherElement>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box flex={2} display="flex" flexDirection="column">
          <Box marginLeft="auto">
            <ArcherElement id="element3">
              <DiagramNode title="AliExpress" style={DSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element4">
              <DiagramNode title="Amazon" style={DSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element5">
              <DiagramNode title="Openship Marketplace" style={DSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element6">
              <DiagramNode title="Your Supplier" style={DSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto" paddingTop="20px">
            <ArcherElement
              id="ds"
              relations={[
                {
                  targetId: "fs",
                  targetAnchor: "left",
                  sourceAnchor: "right"
                }
              ]}
            >
              <Heading
                marginRight="4px"
                size={100}
                fontWeight={600}
                fontSize="14px"
                color="#E4E7EB"
              >
                Dropshipping Systems
              </Heading>
            </ArcherElement>
          </Box>
        </Box>
        <Box flex={3} />
        <Box flex={2}>
          <Box marginLeft="auto">
            <ArcherElement id="element7">
              <DiagramNode title="ShipBob" style={FSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element8">
              <DiagramNode title="ShipMonk" style={FSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element9">
              <DiagramNode title="Deliverr" style={FSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto">
            <ArcherElement id="element10">
              <DiagramNode title="Custom 3PL" style={FSbranch} />
            </ArcherElement>
          </Box>
          <Box marginLeft="auto" paddingTop="20px">
            <ArcherElement id="fs">
              <Heading
                marginLeft="4px"
                size={100}
                fontWeight={600}
                fontSize="14px"
                color="#E4E7EB"
              >
                Fulfillment Systems
              </Heading>
            </ArcherElement>
          </Box>
        </Box>
      </Box>
      <Heading
        display="flex"
        justifyContent="center"
        size={500}
        // fontWeight={600}
        // fontSize="14px"
        color="#E4E7EB"
      >
        Bulk buying & Private Label
      </Heading>
    </ArcherContainer>
  </Box>
);

export default HIWDiagram;
