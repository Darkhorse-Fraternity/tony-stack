import { useFieldArray, type UseFieldArrayReturn } from "react-hook-form"
interface IFieldArrayPro {
  fieldArrayName: string
  render: (
    arg: Pick<UseFieldArrayReturn, "append" | "remove" | "fields"> & {
      fieldArrayName: string
    }
  ) => JSX.Element | null
}

export const FieldArrayForm = ({ fieldArrayName, render }: IFieldArrayPro) => {
  const { fields, append, remove } = useFieldArray({
    name: fieldArrayName,
    // shouldUnregister: true,
  })

  return render({ fieldArrayName, fields, append, remove })
}

export default FieldArrayForm
