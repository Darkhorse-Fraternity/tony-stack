import React, { useState } from "react"
import { type z } from "zod"

import { SignInForm } from "~/components/form/entity/sign-in"
import MenuSlider from "~/components/menu-slider"
import JsonView from "~/components/the-third-party/json-view"
import { testSchema } from "~/lib/schema"
import { type NextPageWithLayout } from "~/types/page"

const DaisyForm: NextPageWithLayout = () => {
  const [data, setData] = useState<z.infer<typeof testSchema>>()

  return (
    <div className="flex">
      <SignInForm
        initialValues={{ account: "", password: "" }}
        schema={testSchema}
        onSubmit={(res) => {
          setData(res)
        }}
      />
      <div className="ml-2">
        <label className="mb-2">DATA:</label>
        <JsonView
          name={false}
          src={data ?? {}}
          collapsed={false}
          indentWidth={2}
          displayDataTypes={false}
        />
      </div>
    </div>
  )
}

DaisyForm.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default DaisyForm
