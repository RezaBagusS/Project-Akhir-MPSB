import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export const QuestionModal = ({ open, handleSubmit, handleResponseSubmit }) => {
    return (
        <Fragment>
          <Dialog open={open} handler={handleSubmit}>
            <DialogHeader>
              <Typography variant="h5" color="blue-gray">
                Konfirmasi Submit
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <QuestionMarkCircleIcon className="h-16 w-16 text-red-500" />
              <Typography color="red" variant="h4">
                Yakin submit sekarang ?
              </Typography>
              <Typography className="text-center font-normal">
                Setelah submit, kamu bisa mencoba memperbaiki kode mu kembali jika terdapat kesalahan.
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleSubmit}>
                Kembali
              </Button>
              <Button variant="filled" onClick={handleResponseSubmit}>
                Submit
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
    )
}