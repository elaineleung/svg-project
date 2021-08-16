import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
// import { Icon } from '@material-ui/core';
import SVG from 'react-inlinesvg';
import styles from '../styled/Dropzone.module.css';

function Dropzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    props.setImageSrc(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <Container
      className={styles.container}
      {...getRootProps()}
      isDragActive={isDragActive}
    >
      <input {...getInputProps()} />
      {
        <Content className={styles.content}>
          <SVG title="Image upload" src="/images.svg" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div>
              <p>Drag 'n' drop your image file here, or click to select file</p>
              <UploadButton className={'btn'} variant="contained">
                Upload Image
              </UploadButton>
            </div>
          )}
        </Content>
      }
    </Container>
  );
}

export default Dropzone;
