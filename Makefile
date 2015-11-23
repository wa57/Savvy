CURRENT_DIR = $(shell pwd)
INSTALL_ROOT = /
BUILD_DIR = $(CURRENT_DIR)/Build


help:
    echo "Help text."


install: nginx mongo savvy
    echo "Installed."


build:
    echo "Building..."
    mkdir -p "$(CURRENT_DIR)/Build"
    echo ""


nginx: build
    echo "Installing nginx..."
    tar xvzf "$(CURRENT_DIR)/Include/nginx-1.8.0.tar.gz" "$(BUILD_DIR)"
    cd "$(BUILD_DIR)/nginx-1.8.0"
    ./configure
    make
    make install
    echo ""


mongo: build
    echo "Installing MongoDB..."
    tar xvzf "$(CURRENT_DIR)/Include/mongodb-linux-x86_64-ubuntu1404-3.0.7.tgz" "$(BUILD_DIR)"
    cd "$(BUILD_DIR)/mongodb-linux-x86_64-ubuntu1404-3.0.7"
    ./configure
    make
    make install
    echo ""


savvy:
    echo "Installing Savvy..."
