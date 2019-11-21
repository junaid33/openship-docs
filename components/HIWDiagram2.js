import React from "react";
import { Box as Pane, Heading } from "@chakra-ui/core";
import { ArcherContainer, ArcherElement } from "react-archer";
import DiagramNode from "./DiagramNode2";
import Logo from "./Logo2";
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
  <Pane background="black">
    <ArcherContainer strokeColor="white" strokeWidth={2}>
      {/* <div>
      <div style={rootStyle}>
        <ArcherElement
          id="root"
          relations={[
            {
              targetId: "element2",
              targetAnchor: "top",
              sourceAnchor: "bottom"
            }
          ]}
        >
          <div style={boxStyle}>Root</div>
        </ArcherElement>
      </div>

      <div style={rowStyle}>
        <ArcherElement
          id="element2"
          relations={[
            {
              targetId: "element3",
              targetAnchor: "left",
              sourceAnchor: "right",
              style: { strokeColor: "blue", strokeWidth: 1 },
              label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>
            }
          ]}
        >
          <Pane display="flex" alignItems="center" justifyContent="center">
            <DiagramNode
              title="Shopify"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #fff",
                borderRadius: ".25rem",
                boxShadow:
                  "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px,rgba(255,255,255,.5) 0 0 0 0",
                boxSizing: "border-box",
                color: "#212529",
                display: "inline-block",
                fontSize: ".875rem",
                fontWeight: "600",
                letterSpacing: ".025em",
                lineHeight: "1.5",
                outline: "0",
                padding: ".625rem 1.25rem",
                position: "relative",
                textAlign: "center",
                textDecoration: "none",
                textTransform: "uppercase",
                transitionDelay: "0s",
                transitionDuration: ".15s",
                transitionProperty: "all",
                transitionTimingFunction: "ease",
                userSelect: "none",
                verticalAlign: "middle",
                willChange: "transform"
              }}
            />
          </Pane>
        </ArcherElement>

        <ArcherElement id="element3">
          <Pane display="flex" alignItems="center" justifyContent="center">
            <DiagramNode
              title="Openship"
              style={{
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
                padding: ".625rem 1.25rem",
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
            />
          </Pane>{" "}
        </ArcherElement>

        <ArcherElement
          id="element4"
          relations={[
            {
              targetId: "root",
              targetAnchor: "right",
              sourceAnchor: "left",
              label: "Arrow 3"
            }
          ]}
        >
          <div style={boxStyle}>Element 4</div>
        </ArcherElement>
      </div>
    </div> */}

      <Pane
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
          {/* <DiagramNode
          title="Shopify"
          style={{
            backgroundColor: "#F9F9FB",
            border: "1px solid #F9F9FB",
            borderRadius: ".25rem",
            boxShadow:
              "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px,rgba(255,255,255,.5) 0 0 0 0",
            boxSizing: "border-box",
            color: "#212529",
            display: "inline-block",
            fontSize: ".875rem",
            fontWeight: "600",
            letterSpacing: ".025em",
            lineHeight: "1.5",
            outline: "0",
            padding: ".625rem 1.25rem",
            position: "relative",
            textAlign: "center",
            textDecoration: "none",
            textTransform: "uppercase",
            transitionDelay: "0s",
            transitionDuration: ".15s",
            transitionProperty: "all",
            transitionTimingFunction: "ease",
            userSelect: "none",
            verticalAlign: "middle",
            willChange: "transform"
          }}
        /> */}
          {/* <Pane
          {...{
            backgroundColor: "#F9F9FB",
            border: "1px solid #F9F9FB",
            borderRadius: ".25rem",
            boxShadow:
              "rgba(50,50,93,.11) 0 4px 6px,rgba(0,0,0,.08) 0 1px 3px,rgba(255,255,255,.5) 0 0 0 0",
            boxSizing: "border-box",
            color: "#212529",
            display: "inline-block",
            fontSize: ".875rem",
            fontWeight: "600",
            letterSpacing: ".025em",
            lineHeight: "1.5",
            outline: "0",
            paddingX: ".8rem",
            paddingY: ".5rem",
            position: "relative",
            textAlign: "center",
            textDecoration: "none",
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
          <img src={shopifyLogo} />
        </Pane> */}
          <Pane
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
          </Pane>
        </ArcherElement>
      </Pane>

      <Pane
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
          <Pane
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
          </Pane>
        </ArcherElement>
      </Pane>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Pane flex={2} display="flex" flexDirection="column">
          <Pane marginLeft="auto">
            <ArcherElement id="element3">
              <DiagramNode title="AliExpress" style={DSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element4">
              <DiagramNode title="Amazon" style={DSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element5">
              <DiagramNode title="Openship Marketplace" style={DSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element6">
              <DiagramNode title="Your Supplier" style={DSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto" paddingTop="20px">
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
          </Pane>
        </Pane>
        <Pane flex={3} />
        <Pane flex={2}>
          <Pane marginLeft="auto">
            <ArcherElement id="element7">
              <DiagramNode title="ShipBob" style={FSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element8">
              <DiagramNode title="ShipMonk" style={FSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element9">
              <DiagramNode title="Deliverr" style={FSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto">
            <ArcherElement id="element10">
              <DiagramNode title="Custom 3PL" style={FSbranch} />
            </ArcherElement>
          </Pane>
          <Pane marginLeft="auto" paddingTop="20px">
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
          </Pane>
        </Pane>
      </Pane>
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
  </Pane>
);

export default HIWDiagram;
