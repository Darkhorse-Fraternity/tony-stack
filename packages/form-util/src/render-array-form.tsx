import { useMemo } from "react"
import {
  FieldValues,
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form"
interface IFieldArrayPro {
  fieldArrayName: string
  setVal?: FieldValues[]
  render: (
    arg: Pick<UseFieldArrayReturn, "append" | "remove" | "fields"> & {
      fieldArrayName: string
    }
  ) => JSX.Element | null
}

export const FieldArrayForm = ({
  fieldArrayName,
  setVal,
  render,
}: IFieldArrayPro) => {
  const {
    setValue,
    control,
    // formState: { isSubmitting, errors },
  } = useFormContext()

  useMemo(() => {
    if (setVal) {
      setValue(fieldArrayName, setVal)
    }
  }, [JSON.stringify(setVal)])

  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    // shouldUnregister: true,
  })

  return render({ fieldArrayName, fields, append, remove })
}

export default FieldArrayForm
