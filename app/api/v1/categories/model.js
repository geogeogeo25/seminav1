  const mongoose = require('mongoose');
  const {model, Schema} = mongoose;

  const categorySchema = Schema (
    {
        name: {
        type: String,
        minlength : [3, 'panjang nama kategori minimal 3 karakter'],
        maxlength : [20, 'panjang nama kategori maximal 20 karakter'],
        required : [true, 'Nama Kategori harus diisi'],
      },
    },
    { timestamps : true }
    );

    module.exports = model('Category',categorySchema);// categori perlu di ubah??