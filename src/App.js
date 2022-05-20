import React, { useState } from 'react'
import { Box, VStack, Center, Button } from '@chakra-ui/react'
import data from './waferdata.json'
import Wafermap from './components/Wafermap.js'

function App() {
  const [waferIdx, setWaferIdx] = useState(0)
  var dimensions = {'width': 400, 'height': 400}

  function nextWafer() {
    waferIdx === (data.length - 1) ?
      setWaferIdx(0) : setWaferIdx(waferIdx + 1)
  }

  return (
    <Box>
      <Center>
        <VStack>
          <Wafermap
            points={data[waferIdx].points}
            configuration={dimensions}
          />
          <Button onClick={nextWafer}>Next wafer</Button>
        </VStack>
      </Center>
    </Box>
  )
}

export default App
