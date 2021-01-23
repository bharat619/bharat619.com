import React from "react";

import styled from "styled-components";
import SEO from "../components/SEO";
import { HeaderStyle } from "../components/styles/Heading";

const UsesWrapper = styled.div`
  margin-top: 10rem;
  font-family: monospace;
  @media (max-width: 600px) {
    margin-top: 5rem;
  }
  padding: 1rem;

  p {
    line-height: 2;
  }
`;

const Heading = styled(HeaderStyle)`
  span {
    &:before {
      width: 0.75em;
      height: 0.75em;
      content: "";
      background: var(--yellow);
      position: absolute;
      z-index: -1;
      --translate: -0.5rem;
      transform: translateX(var(--translate)) translateY(var(--translate))
        rotate(0deg);
    }
    border-bottom: none;
  }

  transform: none !important;
`;

export default function Uses() {
  return (
    <>
      <SEO title="My uses"></SEO>
      <UsesWrapper>
        <Heading>
          <span>Uses</span>
        </Heading>
        <p>
          I have summarized my workstation, my setup, terminal and some of the
          handy extensions that I use.
        </p>
        <Heading as="h3">
          <span>Laptop</span>
        </Heading>
        <p>
          I use a <b>MacBook Pro</b> 13" 2016 model as primary system.
          <ul>
            <li>1.2 Ghz Intel i5</li>
            <li>256GB flash storage</li>
          </ul>
        </p>
        <p>
          I use a <b>ASUS Windows laptop</b> as a backup machine (and to play
          games YES..!! I am a gamer as well 🎮)
          <ul>
            <li>2.8Ghz Intel i9</li>
            <li>Windows 10, 1TB HDD</li>
            <li>NVIDIA GTX 1080 4GB</li>
          </ul>
        </p>
        <ul></ul>

        <Heading as="h3">
          <span>Editor and Terminal</span>
        </Heading>
        <p>
          <ul>
            <li>I use Visual Studio Code editor</li>
            <li>
              I use <b>Cobalt2</b> theme for my VS Code
            </li>
            <li>
              I use <b>iterm2</b> as terminal in my mac and use <i>oh-my-zsh</i>{" "}
              with it
            </li>
            <li>
              For my windows, I use the default <b>ubuntu</b> shell
            </li>
          </ul>
        </p>

        <Heading as="h3">
          <span>Some useful extensions</span>
        </Heading>
        <p>
          Apart from a lot of <i>DevTools</i> kinda extensions, these are some
          interesting browser extensions that I really like, and they are pretty
          handy sometimes.
          <ul>
            <li>
              <u>
                <a href="https://chrome.google.com/webstore/detail/octotree-github-code-tree/bkhaagjahfmjljalopjnoealnfndnagc">
                  OctoTree for Github
                </a>
              </u>{" "}
              Gives a nice sidebar for code / file navigation option in github
            </li>
            <li>
              <u>
                <a href="https://www.screencastify.com/">Screencastify</a>
              </u>{" "}
              Simple and one of the best screen recorders, in case you want to
              record a quick demo or something...
            </li>
            <li>
              <u>
                {" "}
                <a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en%20">
                  ColorPick Eyedropper
                </a>
              </u>{" "}
              If you want to know what color is used in any webpage or even any
              image, this is a great tool for that.
            </li>
            <li>
              <u>
                <a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en%20">
                  JSONView
                </a>
              </u>{" "}
              Nice tool to read the API response in a tree, rather than raw
              format
            </li>
            <li>
              <u>
                <a href="https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal?hl=en">
                  Page Ruler Redux
                </a>
              </u>{" "}
              Great measurement tool for all the dimensions, positions and other
              page measurement shinanigans
            </li>
          </ul>
        </p>
      </UsesWrapper>
    </>
  );
}
