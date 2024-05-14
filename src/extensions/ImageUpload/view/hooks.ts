import { DragEvent, useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { API } from "@/src/lib/api";

interface IFile {
  name: string;
  type: string;
  size: number;
  url: string;
}

export const useUploader = ({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<IFile[]>([]);
  const uploadFile = useCallback(
    async (file: any) => {
      setLoading(true);
      try {
        console.log(file);
        const url = await API.uploadImage();
        const fileType = file.name.split(".");
        const fileData: IFile = {
          name: file.name,
          size: file.size,
          type: fileType[fileType.length - 1],
          url: url,
        };
        setFiles((prev) => [
          ...prev,
          {
            ...fileData,
          },
        ]);
      } catch (errPayload: any) {
        const error =
          errPayload?.response?.data?.error || "Something went wrong";
        toast.error(error);
      }
      setLoading(false);
    },
    [onUpload]
  );

  return { loading, uploadFile, files };
};

export const useFileUpload = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUploadClick = useCallback(() => {
    fileInput.current?.click();
  }, []);

  return { ref: fileInput, handleUploadClick };
};

export const useDropZone = ({
  uploader,
}: {
  uploader: (file: File) => void;
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [draggedInside, setDraggedInside] = useState<boolean>(false);

  useEffect(() => {
    const dragStartHandler = () => {
      setIsDragging(true);
    };

    const dragEndHandler = () => {
      setIsDragging(false);
    };

    document.body.addEventListener("dragstart", dragStartHandler);
    document.body.addEventListener("dragend", dragEndHandler);

    return () => {
      document.body.removeEventListener("dragstart", dragStartHandler);
      document.body.removeEventListener("dragend", dragEndHandler);
    };
  }, []);

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      setDraggedInside(false);
      if (e.dataTransfer.files.length === 0) {
        return;
      }

      const fileList = e.dataTransfer.files;

      const files: File[] = [];

      for (let i = 0; i < fileList.length; i += 1) {
        const item = fileList.item(i);
        if (item) {
          files.push(item);
        }
      }

      if (files.some((file) => file.type.indexOf("image") === -1)) {
        return;
      }

      e.preventDefault();

      const filteredFiles = files.filter((f) => f.type.indexOf("image") !== -1);

      const file = filteredFiles.length > 0 ? filteredFiles[0] : undefined;

      if (file) {
        uploader(file);
      }
    },
    [uploader]
  );

  const onDragEnter = () => {
    setDraggedInside(true);
  };

  const onDragLeave = () => {
    setDraggedInside(false);
  };

  return { isDragging, draggedInside, onDragEnter, onDragLeave, onDrop };
};
