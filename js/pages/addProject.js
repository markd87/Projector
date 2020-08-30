import { useState } from "react";
import { Heading, Flex, Input, Textarea, Button } from "@chakra-ui/core";
import { FormControl, FormLabel } from "@chakra-ui/core";
import Layout from "../components/layout";
import { ADD_PROJECT_QUERY } from "../utils/queries";
import { useToast } from "@chakra-ui/core";
import { withApollo } from "../lib/apollo";
import { useMutation } from "@apollo/react-hooks";

const AddProject = (props) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [addProj] = useMutation(ADD_PROJECT_QUERY);

  const toast = useToast();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (code.length && name.length && description.length) {
      addProj({
        variables: {
          object: { code: code, name: name, description: description },
        },
      }).then(
        (result) => {
          toast({
            title: "Project added!",
            description: "Project " + name + " added successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          // clear form
          setCode("");
          setName("");
          setDescription("");
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed adding project",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
    }
  };

  return (
    <>
      <Layout>
        <Flex padding="15px" d="column">
          <Heading>Add Project</Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="pcode">Project code</FormLabel>
            <Input
              id="pcode"
              placeholder="Project code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="pname">Project name</FormLabel>
            <Input
              id="pname"
              placeholder="Project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="pdesc">Project description</FormLabel>
            <Textarea
              id="pdesc"
              placeholder="Project description"
              maxLength="200"
              resize="none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <Button variantColor="green" marginY="1rem" onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      </Layout>
    </>
  );
};

export default withApollo(AddProject, {
  ssr: false,
});
