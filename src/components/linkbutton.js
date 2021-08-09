import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";

const LinkButton = styled(GatsbyLink)`
  display: inline-block;
  margin: 1rem;
  padding: 1rem 2rem;
  min-width: 1rem;
  min-height: 1rem;
  font-weight: bold;
  background-color: white;
  border-radius: 10rem;
  text-decoration: none;

  :hover {
    background-color: grey;
  }
`;

export default LinkButton;