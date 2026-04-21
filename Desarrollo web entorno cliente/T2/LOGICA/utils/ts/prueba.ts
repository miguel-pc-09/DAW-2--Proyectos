alternarEdicion(): void {
  if (!this.modoEdicion) {
    this.modoEdicion = true;
    return;
  }

  const avatarParaGuardar = this.obtenerAvatarParaGuardar();
  const datoPago = this.obtenerDatoPagoParaGuardar();

  const datosFormulario = new FormData();
  datosFormulario.append('nombre', this.nombre.trim());
  datosFormulario.append('apellidos', this.apellido.trim());
  datosFormulario.append('telefono', this.telefono.trim());
  datosFormulario.append('provincia', this.provincia.trim());
  datosFormulario.append('direccion', this.direccion.trim());
  datosFormulario.append('avatar', avatarParaGuardar);
  datosFormulario.append('metodoPago', this.metodoPago);
  datosFormulario.append('datoPago', datoPago);

  if (this.archivoAvatar) {
    datosFormulario.append('avatarFile', this.archivoAvatar);
  }

  this.authService.actualizarPerfil(datosFormulario).subscribe({
    next: (respuesta) => {
      /*
        Si el backend ha subido una imagen a Cloudinary,
        guardamos la URL final que devuelve.
      */
      if (respuesta.avatar) {
        this.avatar = respuesta.avatar;
      } else {
        this.avatar = avatarParaGuardar;
      }

      this.avatarSubido = null;
      this.archivoAvatar = null;
      this.modoEdicion = false;

      const token = this.authService.obtenerToken();
      if (token) {
        this.authService.guardarSesion(token, {
          id: this.userId ?? 0,
          nombre: this.nombre,
          apellidos: this.apellido,
          email: this.correo,
          rol: this.rol as RolUsuario,
          avatar: this.avatar,
          telefono: this.telefono,
          provincia: this.provincia,
          direccion: this.direccion,
          metodoPago: this.metodoPago,
          datoPago: datoPago,
        });
      }

      this.cdr.detectChanges();

      Swal.fire({
        title: 'Guardado correctamente',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    },
    error: (error) => {
      console.error('Error al guardar el perfil:', error);

      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar el perfil.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
  });
}