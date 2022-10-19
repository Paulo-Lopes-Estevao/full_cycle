FROM golang AS build

WORKDIR /go/src

ENV GOOS=linux
ENV PATH="/go/bin:${PATH}"
ENV GO111MODULE=on
ENV CGO_ENABLED=0
ENV GOARCH=amd64

COPY main.go /go/src/

RUN go mod init app

RUN go build -o main

FROM scratch

WORKDIR /go/src

COPY --from=build /go/src/main ./main

CMD [ "./main" ]