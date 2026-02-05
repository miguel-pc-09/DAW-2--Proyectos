from usuarios.usuario import Usuario

class Cliente(Usuario):
    def __init__(self, nombre, correo):
        super().__init__(nombre, correo)

        # Lista donde voy a guardar las reservas del cliente
        self.reservas = []
    
    def anadir_reserva(self, reserva):
         # Metodo para añadir una reserva a la lista del cliente
        self.reservas.append(reserva)
        
    def mostrar_info(self):
        # Muestro la informacion basica del usuario
        super().mostrar_info()
        # muestro cuantas reservas tiene el cliente
        print(f"Reservas: {len(self.reservas)}")
        
    def mostrar_reservas(self):
        # metodo para mostrar todas las reservas del cliente
        if not self.reservas:
            print("Este cliente no tiene reservas.")
        else:
            print("Reservas del cliente:")
            for reserva in self.reservas:
                print(reserva)