# A.I Course Material

The course material for the A.I course has been written in Jupyter
Notebooks so that executable examples don't have to be seperated
from the course material.

## Usage

To bring up a local instance of the course notebooks use:

```bash
docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes -v "$PWD/notebooks":/home/jovyan/work eksoverzero/ada-ai-notebook:latest
```
